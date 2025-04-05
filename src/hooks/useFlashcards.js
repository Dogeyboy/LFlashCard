import { useState, useEffect} from 'react';
import { supabase } from '../services/supabaseService';

export const useFlashcards = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFlashcards = async () => {
            const { data, error} = await supabase.from('flashcards').select('*');
            if (error) console.error(error);
            else setFlashcards(data);
            setLoading(false);
        };
        fetchFlashcards();
    }, []);

    return { flashcards, loading };
};