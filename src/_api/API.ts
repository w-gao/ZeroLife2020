
export default interface API {

    /**
     * Do whatever it needs to initialize the API
     */
    init(): boolean;

    /**
     *
     */
    save(): void;

    /**
     *
     */
    isLoggedIn(): boolean;

    /**
     * @return status {boolean}
     */
    login(email: string, password: string): boolean;


    auth_logout(): void;

    /**
     *
     * [
     *   {
     *     "id"
     *     "completed_at": timestamp
     *   },
     *   ...
     * ]
     *
     * @param category
     */
    get_tasks(category: string): object[];

    /**
     * [
     *   id
     *   ,
     *   ...
     * ]
     */
    get_achievements(): [];

    create_task(category: string, id: number): void;

    create_achievement(id: number): void;

}
