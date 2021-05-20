declare module 'Discord-Services.js' {
    interface Bot {
        bot_id: string;
        bot_name: string;
        bot_prefix: string;
        bot_library: string;
        bot_avatar: string;
        bot_short_desc: string;
        bot_long_desc: string;
        bot_owners: string[];
        bot_invite_link: string;
        bot_support_discord: string | null;
        bot_website: string | null;
        bot_github_repo: string | null;
        bot_server_count: string;
        bot_vote_count: string;
        bot_vanity_url: string | null;
        bot_visible: '0' | '1';
        bot_in_queue: boolean;
        bot_certified: boolean;
        bot_categories: string[];
        bot_rate_one: string;
        bot_rate_two: string;
        bot_rate_three: string;
        bot_rate_four: string;
        bot_rate_five: string;
        bot_rate_average: string;
    }

    interface categorys {
        Utility: "Utility";
    }


    interface PostedStats {
        error: boolean;
        message: string;
    }

    interface postCommands {
        error: boolean;
        message: string;
    }

    interface postNews {
        error: boolean;
        message: string;
    }

    export default class BoatsClient {
        constructor(token: string);

        public token: string;
        //public version: string;
        //public getBot(id: string): Promise<Bot>;
        //public getVoted(botID: string, userID: string): Promise<HasVoted>;
        public postNews(botid: string, title: string, content: string, error: boolean): Promise<postNews>
        public postCommands(botID: string, comma: string, desc: string, category: string): Promise<postCommands>;
        public postStats(serverCount: number, botID: string): Promise<PostedStats>;
    }
}