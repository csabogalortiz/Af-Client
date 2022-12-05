
| URI path                               | Description                       | PROTECTED |
|-------------|--------------------------|---------------------------------- |-----------|
|`/login`    |                          | Login or register page            |   No      |   
|`/feed`      |                          | Feed/ Home                        |   yes     |   
|`/singup`      |                        | register page                     |   No |   


| URI path                              | Description                       | PROTECTED |
|---------------------------------------|-----------------------------------|-----------|
|`/profile/:user_id`                    | User's Profile                    |           |      
| `/profile/:user_id/my-posts`          | User's Profile- Posts View        |           |
| `/profile/:user_id/retweeted-posts`   | User's Prof RetweetedPosts View   |           |           
| `/profile/:user_id/fav-posts`         | User's Prof Favs View             |           |


| URI path                              | Description                       | PROTECTED         |
|---------------------------------------|-----------------------------------|-------------------|
|`/posts/:post_id/details`               | Post Details 	                    |                   |
|`/posts/:post_id/details/retwweeted`    | List retweeted post               |                   |
 


| URI path                                           |         Description                       | PROTECTED |
|----------------------------------------------------|-------------------------------------------|-----------|
| `/discover`                                        | Feelings  List                            |           |
| `/discover/:feeling_id`                            | Feeling with  posts attached              |           |
| `/dicover/feelings/create`                         | Create - Form                             |           |
| `/dicover/:feeling_id/edit`                        | Feeling edit  - Form                      |           |


| URI path                             |         Description                    | PROTECTED  |                   
|--------------|-----------------------|----------------------------------------|            |
| `/Community` |                       |     List users                         |            |
