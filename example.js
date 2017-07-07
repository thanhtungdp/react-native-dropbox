function sum(a, b){
	return a + b;
}

const sumArrow = (a,b) => a + b;

sum(5,6) === sumArrow(5,6);


let name = "Tung";
let hello = "Hello " + name + ", How are you";
// String teamplate
hello = `Hello ${name}, How are you ?`;


// Home.js
import React from 'react';
import {View} from 'react-native';

export default class Home extends React.Component{
	state = {
		isLogin: true
	}
	render(){
		return <View>
			<Logo size={20}/>
		</View>
	}
}

// Logo.js
import React from 'react';
import {Image} from 'react-native';

export default function Logo(props){
	return <Image width={props.size}/>
}

// 3. Destruct object
var person = {
	fullName: 'Thanh Tung',
	old: 'Phan'
}

const {fullName, old} = person;
console.log(fullName);