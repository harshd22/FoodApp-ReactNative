import React, {PureComponent} from 'react';
import {Image,ScrollView, Dimensions} from 'react-native';
import {Box,Text} from 'react-native-design-utility';

const { width: w } = Dimensions.get('window');
const images = [
	require('../../assets/banner/b1.png'),
	require('../../assets/banner/b2.png'),
	require('../../assets/banner/b3.png')
];

class HomeTop extends PureComponent{

	constructor(props){
		super(props);
		this.state = {
			currentIndex : 0,
		};

		this.scrollView = React.createRef();
	}

	componentDidMount(){
		this.timer = setInterval(()=>{
			this.handleScroll()
		},2600)
	}

	handleScroll(){
		const newInd = this.state.currentIndex+1;

		if(newInd < images.length){
			this.scrollView.current.scrollTo({
				x: newInd * w,
				animated: true,
			})
			this.setState({currentIndex : newInd});
		}else{
			this.scrollView.current.scrollTo({
				x: 0,
				animated: true,
			})
			this.setState({currentIndex : 0});

		}
	}
	render(){
		const{title, image} = this.props;
		return(
			
<Box>
	<ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator = {false} ref = {this.scrollView}>
				{
					images.map((image,j)=>(
					
		<Box center positon = "reletive" key = {j}  style = {{height:120 , width:w }} >
			<Image source = {image}/>
			<Box position = "absolute" 
						 dir = "row"
						 style = {{height:120 , width:w }} 
						 align = "end" 
						 justify="center">

						{Array.from({length: images.length}).map((_ , i)=>(
							
				<Box center key = {i} bg = "#910226" circle= {10} mx = {6}/>
							))}
					</Box>
		</Box>
				))}
				
	</ScrollView>
</Box>
		)
	}

}

export default HomeTop;