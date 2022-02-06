## Express API Backend
Backend using ExpressJS connected to MongoDB through Mongoose. Common user credentials are maintained for all the apps to obtain SSO-like features.

## Tools/Technology Stack

- ```Express Js```
- ```MongoDB``` for database
- ```Mongoose``` to handle validation and communicate to MongoDB
- ```JWT``` with token expiry for user authentication
- ```bcrypt``` and salt for password encryption
- ```Postman``` for testing API routes

## API endpoints

## Users

- GET /users/all - List of all available users
- POST /users/login - username and password validation.
- POST /users/signup - Providing username, password, name, and email for adding a new user into the database.
- GET /users - returns an individual user's details based on authorization header.
- POST /users - Updates the user details based on authorization header.
- PUT /users - Updates the following list of the current user and follower list of the viewing user.

## Products

- GET /products - List of all available products.
- POST /products - Adding a new product into the database.
- GET /products/product-id - Fetch the details of a single product.
- POST /products/product-id - Update the details of a single product.

## Products Wishlist

- GET /wishlist - List of all the products present in the user's wishlist.
- POST /wishlist - Add/remove products to/from their wishlist.

## Products Cart

- GET /cart - List of all the products present in the user's cart.
- POST /cart - Add, move, increment/decrement products to/from their cart.
- PUT /cart - Remove a single item from the cart (irrespective of their quantity)
- DELETE /cart - delete all items from the user's cart.

## Videos

- GET /videos - List of all available videos .
- POST /videos - Adding a new video into the collection.
- GET /videos/video-id - Fetch the details of a single video.
- POST /videos/video-id - Update the details of a single video.

## Video History

- GET /history - List of all the videos present in a user's watch history
- POST /history - Add a video to watch history
- PUT /history - Remove a video from watch history
- DELETE /history - Clear user's watch history

## Liked videos

- GET /liked-video - List of all the videos a user has liked
- POST /liked-video - Add/remove videos from liked videos list

## Playlist

- GET /playlist - All the playlist that a user owns
- POST /playlist - Create a new playlist
- GET /playlist/list-id - List of all the videos in this playlist
- POST /playlist/list-id - Add/remove videos from this playlist
- PUT /playlist/list-id - Rename this playlist
- DELETE /playlist/list-id - Delete this playlist

## Video

- GET /note/notes/video-id - List of notes created against the specific video
- POST /note/notes/video-id - Create a new note for this video
- POST /note/note-id - Update the details of this note
- PUT /note/note-id - Delete this note

## Posts

- GET /post - List of posts available
- POST /post - Add a new post
- PUT /post - Delete post with a specific id
- GET /post/post-id/like - List of users who have liked the post
- POST /post/post-id/like - Like or unlike this post
- GET /post/post-id/comment - List of comments for this post
- POST /post/post-id/comment - Add a user comment to this post
- PUT /post/post-id/comment - Delete a comment on this post with a specific id.

