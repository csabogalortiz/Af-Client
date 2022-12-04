
User.routes - Client 


| HTTP Method | URI path                                 | Description                        | JSON |
|-------------|------------------------------------------|------------------------------------|------|
| GET         | `api/:user_id/profile`                   | User's Profile                     |      |      
| GET         | `api/:user_id/profile/edit`              | User edit profile form render      |      |
| PUT         | `api/:user_id/profile/edit`              | User edit profile form handler     |      |
| PUT         | `api/:user_id/favPost/:post_id`          | Mark a post as favorite            |      |
| POST        | `api/:user_id/favPost/:post_id`          | Delete a post as favorite          |      |
| GET         | `api/:user_id/reTweetedPosts/:post_id`   | User's Retweeted  Posts            |      |
| GET         | `api/:user_id/createdPosts/:post_id`     | Created  Posts                     |      | 

Post.routes

| HTTP Method | URI path               |         Description                    | JSON |
|-------------|----------------------- |----------------------------------------|------| 
| GET         |`/api/post/:post_id/details` | Post Details 	        |  :white_check_mark:    |
| POST        |`/api/post/create` | Create Posts 	     |  :white_check_mark:    |
| POST        |`/api/profile/:user_id/delete/post_:id` | Delete Post 	        |  :white_check_mark:    |
| GET         |`/api/post/post-list` | Posts List 	        |  :white_check_mark:    |


Comment.routes

| HTTP Method | URI path                           |         Description                         | JSON |
|-------------|------------------------------------|-------------------------------------------- |------|
| GET         | `/api/comment/:comment_id`        | All comments                                |      |
| POST        | `/api/comment/create/:comment_id` | Create Comment                              |      |
| PUT         | `/api/comment/create/:comment_id` | Edit Comment                                |      |
| POST        | `/api/comment/delete/:comment_id` | Delete Comment                              |      |


Feelings.routes

| HTTP Method | URI path                            |         Description                       | JSON |
|-------------|-----------------------------------  |-------------------------------------------|------|
| GET         | `/api/Dictionary/feeling/list`      | List feelings post                        |      |
| GET         | `/api/Dictionary/feeling/create`    | Create - Form - (render)                  |      |
| POST        | `/api/Dictionary/feeling/create`    | Create - Form - (handle)                  |      |
| PUT         | `api/Dictionary/:feeling_id/edit`   | Feeling edit profile form render          |      |
| GET         | `api/Dictionary/:feeling_id/edit`   | Feeling edit profile form render          |      |
| POST        | `api/:feeling_id/delete`            | Feeling delete                            |      |

Auth.routes

| HTTP Method 	| URI path      	           | Description                                           | JSON  |
|-------------	|------------------------------|------------------------------------------------------ |-------|
| GET         	| `/api`             	       | Feed page - Check Roles & Log Status         	       |       |
| GET         	| `/api/sign-up` 	           | Signup - Form - (render)                              |       |
| POST         	| `/api/sign-up`               | Sign up - Form - (handle)                             |       |
| GET         	| `/api/log-in`                | Login - Form-  (render)                               |       |
| POST         	| `/api/log-in`                | Login - Form-  (handle) 	                           |       |
| GET         	| `/api/logout` 	           | User Log out - Destroy Session- Redirect to `/log-in` |       |           


Api.routes

| HTTP Method | URI path               |         Description                    | JSON                   |
|-------------|----------------------- |----------------------------------------|------------------------|
| GET         | `/api/Dictionary`      | List feelings post                     |  :white_check_mark:    |   
| GET         | `/api/Users`           | List users                             |  :white_check_mark:    |
| PUT         | `/api/Comments`        | List comments  in your post            | :white_check_mark:     |

