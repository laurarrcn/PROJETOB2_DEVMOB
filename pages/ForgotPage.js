import { TextInput, View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';

export default function ForgotPage({ navigation }) {  
  
  return (
    <ImageBackground
     
      style={styles.innerContainer}
      blurRadius={2}
    >
      <View style={styles.container}>

        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={require('../IMAGENS/pnguvv.png')} />
        </View>
        
        <Text style={styles.p1}>
          Redefinina a sua senha!
        </Text>

        <Text style={styles.p2}>
          Informe seu e-mail cadastrado
        </Text>

        <View style={styles.container2}>
          <Text style={styles.p3}>
            Email
          </Text>
        </View>
                
        <TextInput
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={() => console.log('Pressed')}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.cancelar}>
            Voltar
          </Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#3B4475'
  },

  container: {
    width: 280, 
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#F5DC46'
  },

  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  logo: {
    width: 130, 
    height: 130, 
    resizeMode: 'contain',
  },

  p1: {
   color: '#03045e',
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },

  p2: {
color: '#03045e',
    fontSize: 13,
    padding: 20,
    textAlign: 'center',
    width: '100%',
  },

  container2: {
    width: '70%',
    marginBottom: 1,
  },

  p3: {
  color: '#03045e',
    fontSize: 12,
  },

  input: {
    height: 40,
    color: 'black',
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
    width: '70%',
    backgroundColor: 'white',
  }, 
  
  button: {
 backgroundColor: '#03045e',
    marginTop: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  buttonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },

  cancelar: {
      textAlign: 'center',
      color: '#03045e',
      marginTop: 15,
      textDecorationLine: 'underline',
    },
  
});
