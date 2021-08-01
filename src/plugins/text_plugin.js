import {plugin} from './../plugin.js'

class text_plugin extends plugin{
	constructor(text){
		super()
		this.widget.innerHTML = text
	}
}

export { text_plugin }