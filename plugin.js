import {el }from './generals.js'

class plugin{
	constructor(){
		this.widget = el('div')
		this.widget.innerHTML = 'empty plugin'
	}
	add_to(adding_to){
		adding_to.widget.appendChild(this.widget)
	}
}

export {plugin}