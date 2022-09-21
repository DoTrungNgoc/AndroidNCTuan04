import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity, TextComponent} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.container_1}>
          <View style={styles.container_1_1}>
              <View>
                  <Image style={{height:150}}  source={require('./assets/book.png')} />
              </View>
              <View style={styles.container_1_1_1}>
                  <Text style = {styles.textTitle}>Nguyên hàm tích phân và ứng dụng</Text>
                  <Text style = {styles.textTitle}>Cung cấp bởi Tiki Trading</Text>
                  <Text style={{color:"red", fontSize:15}}>141.800 đ</Text>
                  <Text style={{color:"#1a1a00",fontSize:13,textDecorationLine:'line-through'}}>141.800 đ</Text>
                  <View style={styles.container_1_1_1_1}>
                      <View style={styles.container_1_1_1_1_1}>
                        <TouchableOpacity style={styles.button}>
                          <Text>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.textTitle}>1</Text>
                        <TouchableOpacity style={styles.button}>
                          <Text>-</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                          <Text style={{fontSize:20,color:'blue'}}>Mua sau</Text>
                      </View>
                  </View>
              </View>
            </View>
            <View style={styles.container_1_2}>
              <Text style={{fontSize:16}}>Mã giảm giá đã lưu</Text>
              <Text style={{fontSize:16, color:'blue',marginLeft:40}}>Xem tại đây</Text>
            </View>
           <View style =  {styles.container_1_3}>
              <View style={styles.container_1_3_1}>
                    <View style={{width:50,backgroundColor:'yellow',height:20, marginLeft:10}}></View>
                    <TouchableOpacity>
                        <Text style={{fontSize:20, marginLeft:20, fontWeight:'bold'}}>Mã giảm giá</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{backgroundColor:'blue',width:120, justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>Áp dụng</Text>
                </TouchableOpacity>
           </View>
        </View>
        <View style = {styles.containerSpace}>
        </View>
        <View style = {styles.container_2}>
            <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
            <TouchableOpacity style={{marginLeft:20}}>
                        <Text style={{fontWeight:'bold', color:'blue'}}>Nhập tại đây?</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.containerSpace}>
        </View>
        <View style = {styles.container_3}>
            <Text style = {{fontSize:25, fontWeight:'bold'}}>Tạm tính</Text>
            <Text style = {{fontSize:25, fontWeight:'bold', color:'red'}}>141.800 đ</Text>
        </View>
        <View style = {styles.containerSpace_1}>
        </View>
        <View  style = {styles.container_3}>
          <Text style = {{fontSize:25, fontWeight:'bold', color:'#DDDDDD'}}>Thành tiền</Text>
          <Text style = {{fontSize:25, fontWeight:'bold', color:'red'}}>141.800 đ</Text>
        </View>
        <TouchableOpacity style={{backgroundColor:'#EA3610', padding:10, width:'90%', alignItems:'center', marginTop:20}}>
              <Text style={{fontWeight:'bold', color:'white', fontSize:27}}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerSpace:{
    width: '100%',
    height: 20,
    backgroundColor: '#DDDDDD',
    marginTop: 20,
    marginBottom: 20
  },
  container_4: {
    width: '90%',
    height: 60,
   backgroundColor:'EA3610'
  },
  containerSpace_1:{
    width: '100%',
    height: 130,
    backgroundColor: '#DDDDDD',
    marginTop: 20,
    marginBottom: 20
  },
  container_3:{
    width: '100%',
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  container_2 :{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container_1: {
    display: 'flex'
  },
  container_1_1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
  },
  textTitle :{
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  container_1_1_1: {
    marginLeft: 20,
    display: 'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    height: 150
  },
  container_1_1_1_1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  container_1_1_1_1_1: {
    width:100,
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    width:20,
    height:20,
    justifyContent: 'center',
  },
  container_1_2: {
    padding:20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'flex-start',
    width: '100%'
  },
  container_1_3_1 :{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor :'black',
    borderWidth:1,
    height: 50,
    width: 210
  },
  container_1_3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
