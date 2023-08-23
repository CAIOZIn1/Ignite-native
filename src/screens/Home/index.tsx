import {Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';

import { styles } from './styles';
import Participant from '../Components/Participant';
import { useState } from 'react';

const Home = () => {
  const [participants, setParticipants] = useState<String[]>([]);
  const [participantName, SetparticipantName] =  useState('');

  function handleParticipantAdd() {
    if(participants.includes(participantName)) return Alert.alert('Participante existe', 'Já existe um participante na lista com este nome');

    setParticipants(prevState => [...prevState, participantName]);
    SetparticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Você realmente deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(prevState => prevState.filter(participant => participant !== name));
          Alert.alert("Deletado!");
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);

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
          onChangeText={SetparticipantName}
          value={participantName}
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

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant
          key={item}
          name={item}
          onRemove={() => handleParticipantRemove(item)}
        />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém foi adcionado a lista ainda...
          </Text>
        )}
      />

    </View>
  );
}

export default Home;
