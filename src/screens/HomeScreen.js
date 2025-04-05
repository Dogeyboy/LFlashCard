import React from 'react'
import { View, FlatList } from 'react-native';
import Flashcard from '../components/Flashcard';
import { useFlashcards } from '../hooks/useFlashcards';

const HomeScreen = () => {
    const { flashcards, loading} = useFlashcards();

    if (loading) return <Text>Loading…</Text>

    return (
        <View>
            <FlatList
                data={flashcards}
                keyExtrator={(item) => item.id.toString()}
                renderItem={({ item}) => <Flashcard word={item.word} translation={item.translation} />}
            />
        </View>
    );
};

export default HomeScreen;