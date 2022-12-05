
User.routes - Client 


| HTTP Method | URI path                              | Description                        | PROTECTED |
|-------------|---------------------------------------|------------------------------------|-----------|
| GET         | `/:user_id/profile`                   | User's Profile                     |           |      
| GET         | `/:user_id/profile/edit`              | User edit profile form render      |           |
| PUT         | `/:user_id/profile/edit`              | User edit profile form handler     |           |
| PUT         | `/:user_id/favPost/:post_id`          | Mark a post as favorite            |           |
| POST        | `/:user_id/favPost/:post_id`          | Delete a post as favorite          |           |
| GET         | `/:user_id/reTweetedPosts/:post_id`   | User's Retweeted  Posts            |           |
| GET         | `/:user_id/createdPosts/:post_id`     | Created  Posts                     |           | 

Post.routes

| HTTP Method | URI path               |         Description                                   | PROTECTED |
|-------------|----------------------- |---------------------------------------------------- --|-----------| 
| GET         |`/post/:post_id/details` | Post Details 	                                       |  :white_check_mark: |
| POST        |`/post/create` | Create Posts 	     |  :white_check_mark:    |
| POST        |`/profile/:user_id/delete/post_:id` | Delete Post 	        |  :white_check_mark:    |
| GET         |`/post/post-list` | Posts List 	        |  :white_check_mark:    |


Comment.routes

| HTTP Method | URI path                           |         Description                         | PROTECTED |
|-------------|------------------------------------|-------------------------------------------- |------|
| GET         | `/comment/:comment_id`        | All comments                                     |      |
| POST        | `/comment/create/:comment_id` | Create Comment                                   |      |
| PUT         | `/comment/create/:comment_id` | Edit Comment                                     |      |
| POST        | `/comment/delete/:comment_id` | Delete Comment                                   |      |


Feelings.routes

| HTTP Method | URI path                            |         Description                       | PROTECTED |
|-------------|-----------------------------------  |-------------------------------------------|------|
| GET         | `/discover/feelings/list`      | List feelings post                              |      |
| GET         | `/dicover/feelings/create`    | Create - Form - (render)                  |      |
| POST        | `/dicover/feelings/create`    | Create - Form - (handle)                  |      |
| PUT         | `/dicover/:feeling_id/edit`   | Feeling edit  - form (render)          |      |
| GET         | `/dicover/:feeling_id/edit`   | Feeling edit - form (render)          |      |
| POST        | `/dicover/:feeling_id/delete`            | Feeling delete                            |      |

Auth.routes

| HTTP Method 	| URI path      	           | Description                                           | PROTECTED  |
|-------------	|------------------------------|------------------------------------------------------ |-------|
| GET         	| `/`             	       | Feed page - Check Roles & Log Status         	       |       |
| GET         	| `/sign-up` 	           | Signup - Form - (render)                              |       |
| POST         	| `/sign-up`               | Sign up - Form - (handle)                             |       |
| GET         	| `/log-in`                | Login - Form-  (render)                               |       |
| POST         	| `/log-in`                | Login - Form-  (handle) 	                           |       |
| GET         	| `/logout` 	           | User Log out - Destroy Session- Redirect to `/log-in` |       |           


.routes

| HTTP Method | URI path               |         Description                    | PROTECTED                   |
|-------------|----------------------- |----------------------------------------|------------------------|
| GET         | `/Dictionary`      | List feelings post                     |  :white_check_mark:    |   
| GET         | `/Users`           | List users                             |  :white_check_mark:    |
| PUT         | `/Comments`        | List comments  in your post            | :white_check_mark:     |

