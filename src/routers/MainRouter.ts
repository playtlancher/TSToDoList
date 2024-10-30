import * as http from 'node:http';

export class MainRouter {

    public static mapRoutes(request:http.IncomingMessage , response:http.ServerResponse){
        const url:string = request.url;
        const method:string = request.method;
        let result:any;
        if (url === "/" && method === "GET"){
            // let userService:UserService = new UserService();
            // let user:User = new User("Razanka132312","123");
            // console.log(user);
            // result = await userService.addUser(user);
            result = '<h3 style="color:red" >It`s work!</h3>'
        }else if(url === "/2" && method === "GET"){
            result = '<h3 style="color:red" >It`s work!!!!!!!</h3>'
        }else{
            result = '<h3 style="color:red" >Wrong Page</h3>'
        }
        response.end(result);
    }
}