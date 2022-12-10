// //FavoriteButton.js
// import React, { useState } from 'react';
// import { Pressable, View, StyleSheet, Image } from 'react-native';


// const FavPostsButton = () => {
//     const [isFavorite, setIsFavorite] = useState(false);

//     const handlePress = () => {
//         setIsFavorite(!isFavorite);
//     };

//     return (
//         <View>
//             <Pressable style={styles.button} onPress={() => handlePress()}>
//                 {isFavorite ? (
//                     <h1>♥</h1>
//                 ) : (
//                     <h1>♡</h1>
//                 )}
//             </Pressable>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     button: {
//         marginRight: 8,
//     },
// });

// export default FavPostsButton;