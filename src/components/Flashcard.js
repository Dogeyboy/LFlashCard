import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Flashcard = ({ word, translation}) => {
    const [flipped, setFlipped] = useState(false);
    
    return (
        <TouchableOpacity onPress={() => setFlipped(!flipped)} style={styles.card}>
            <Text style={styles.text}>{flipped ? translation : word}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '80%',
        height: 150,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#FFD700',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    text: { fontSize: 20, fontWeight: 'bold'},
});

export default Flashcard;