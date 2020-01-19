import {gql} from "apollo-boost";
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const _client = new ApolloClient({
    uri: 'https://lobitos-fxuevruz4a-uc.a.run.app/',

    cache: new InMemoryCache(),
    request: (operation) => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    }
});

export class API {

    // Auth

    public static isLoggedIn(): boolean {
        // !
        return localStorage.getItem('token') !== null;
    }

    public static logout() {
        // !
        localStorage.removeItem('token');
    }

    public static create_user(email: string, password: string, callback: any = undefined) {

        _client.mutate({
            variables: {email: email, password: password},
            mutation: gql`mutation Create_user($email: String!, $password: String!) {
            create_user(email: $email, password: $password) {
              email
              experience
            }
          }`
        }).then(result => {
            if (result && result.data.create_user.email) {
                this.login(email, password);
                this.invokeCallbackFunc(callback, true);

            } else {
                this.invokeCallbackFunc(callback, false);
            }
        })
            .catch(err => {
                console.error(err);
                this.invokeCallbackFunc(callback, false);
            });
    }

    public static login(email: string, password: string, callback: any = undefined) {

        _client.query({
            query: gql`{
                login(email:"${email}", password:"${password}")
                }`
        })
            .then(result => {
                const token = result.data.login;

                if (token !== "Credentials Have Failed" && token !== "User not found") {
                    localStorage.setItem('token', token);
                    this.invokeCallbackFunc(callback, true);
                } else {
                    this.invokeCallbackFunc(callback, false);
                }
            })
            .catch(err => {
                console.error(err);
                this.invokeCallbackFunc(callback, false);
            });
    }

    // fetch data

    /**
     * @return Promise
     */
    public static get_user() {
        return _client.query({
            query: gql`{
              user {
                  email
                  experience
              }
            }`
        });
    }

    /**
     * @return Promise
     */
    public static get_tasks() {
        return _client.query({
            query: gql`{
              user {
                  tasks {
                    title
                    description
                    status
                    category {
                      title
                    }
                  }
              }
            }`
        });
    }

    /**
     * @return Promise
     */
    public static get_achievements() {
        return _client.query({
            query: gql`{
              user {
                  achievements {
                    _id
                    title
                    description
                    completed
                  }
              }
            }`
        });
    }

    public static create_task(category: string, title: string, description: string) {

        return _client.mutate({
            variables: {category: category, title: title, description: description},
            mutation: gql`mutation($category:ID!,$title:String,$description:String) {
  create_task(category:$category,title:$title,description:$description) {            
    title
  }
}`
        }).catch(err => {
            console.error(err);
        });
    }

    public static update_task(task_id: string) {

        return _client.mutate({
            variables: {task_id: task_id},
            mutation: gql`mutation Update_task($task_id: ID!, $category: ID, $title: String, $description: String) {
            update_task(task_id: $task_id, category: $category, title: $title, description: $description) {
              
            }
          }`
        }).catch(err => {
            console.error(err);
        });
    }

    public static create_achievement(category: number, title: string, description: string) {

        return _client.mutate({
            variables: {category: category, title: title, description: description},
            mutation: gql`mutation Create_achievement($category: ID!, $title: String, $description: String) {
            create_achievement(category: $category, title: $title, description: $description) {
              _id
            }
          }`
        }).catch(err => {
            console.error(err);
        });
    }


    // helper
    private static invokeCallbackFunc(callback: any, data: any) {
        if (typeof callback === "function") callback(data);
    }
}
