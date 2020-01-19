
export class LocalAPI {

    private static tasks: any = {};
    private static achievements: any = [];

    public static init() {
        let raw = localStorage.getItem('tasks');
        if (raw) {
            this.tasks = JSON.parse(raw);
        }

        raw = localStorage.getItem('achievements');
        if (raw) {
            this.achievements = JSON.parse(raw);
        }
    }

    public static store() {
        localStorage.setItem('tasks', JSON.stringify(LocalAPI.tasks));
        localStorage.setItem('achievements', JSON.stringify(LocalAPI.achievements));
    }

    public static get_tasks(category: string) {
        if (!this.tasks[category]) {
            this.tasks[category] = [];
        }
        return this.tasks[category];
    }

    public static get_achievements() {
        return this.achievements;
    }

    public static has_achievement(id: number) {
        return this.get_achievements().indexOf(id) === -1;
    }

    public static create_task(category: string, id: number) {
        if (!this.tasks[category]) {
            this.tasks[category] = [];
        }

        this.tasks[category].push(id);

        this.store();
    }

    public static create_achievement(id: number) {
        this.achievements.push(id);
        this.store();
    }
}
