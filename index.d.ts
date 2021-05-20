declare module 'Discord-Services.js' {
    

   // interface categorys {
    //    Utility: "Utility";
   // }


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

    export default class Client {
        constructor(token: string);

        public token: string;
        public postNews(botid: string, title: string, content: string, error: boolean): Promise<postNews>
        public postCommands(botID: string, comma: string, desc: string, category: string): Promise<postCommands>;
        public postStats(serverCount: number, botID: string): Promise<PostedStats>;
    }
}