import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"
import Feed from "../pages/Feed/Feed"
import Discover from "../pages/Discover/Discover"
import Feeling from "../pages/Feeling/Feeling"
import Profile from "../pages/Profile/Profile"
// import Followers from "../pages/Followers/Followers"
import Community from "../pages/Community/Community"
import PostDetails from "../pages/PostDetails/PostDetails"
import NewPost from "../pages/NewPost/NewPost"
import PrivateRoute from "./PrivateRoutes"

const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={<h1>404</h1>} />


            <Route element={<PrivateRoute />}>
                <Route path="/discover" element={<Discover />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/profile/:user_id" element={<Profile isOwner={false} />} />
                <Route path="/myprofile" element={<Profile isOwner={true} />} />
                {/* <Route path="/profile/:user_id/followers" element={<Followers />} /> */}
                <Route path="/community" element={<Community />} />
                <Route path="/posts/:post_id/details" element={<PostDetails />} />
                <Route path="/posts/create" element={<NewPost />} />
                <Route path="/feeling/:feeling_id" element={<Feeling />} />
            </Route>
        </Routes>
    )

}

export default AppRoutes