import {Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';

import { styles } from './styles';
import Participant from '../Components/Participant';

const Home = () => {
  const participants = ['Caio Borges Sella', 'Gabriela Leão', 'Luskas Martins', 'João Vitor', 'André Limonattions', 'Isa', 'Giovanna', 'João Guilherme', 'Pedro', 'Maria']

  function handleParticipantAdd() {
    console.log('Adcionou');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Removeu ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de novembro de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {
        participants.map( args =>
          <Participant
            key={args}
            name={args}
            onRemove={() => handleParticipantRemove(args)}
          />
        )}
      </ScrollView>

    </View>
  );
}

export default Home;
