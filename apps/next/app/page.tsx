'use client';

import { StyleSheet } from 'react-native-unistyles';
import Button from '@stickersmash/ui/components/Button'


const stylesC = StyleSheet.create(theme => ({
    container: {
        // backgroundColor: theme.colors.surfaceVariant,
        alignItems: 'flex-start',
    },
}));

export default function Home() {
    return (
        <div>
        
           <Button />
        </div>
    );
}
