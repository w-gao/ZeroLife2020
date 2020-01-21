import API from "./API";

export default class GraphQLAPI implements API {

    public init(): boolean {
        return false;
    }

    auth_logout(): void {
    }

    create_achievement(id: number): void {
    }

    create_task(category: string, id: number): void {
    }

    get_achievements(): [] {
        return [];
    }

    get_tasks(category: string): object[] {
        return [];
    }

    isLoggedIn(): boolean {
        return false;
    }

    login(email: string, password: string): boolean {
        return false;
    }

    save(): void {
    }

}
