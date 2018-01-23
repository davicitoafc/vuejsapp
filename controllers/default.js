exports.install = function() {
	F.route('/', view_index);
	// or
	// F.route('/');
	F.route('/tools', view_tools);
	F.route('/about', view_about);
};

function view_index() {
	var self = this;
	self.view('vuecomponents');
}

function view_tools(){
	var self = this;
	self.view('tools');
}

function view_about(){
	var self = this;
	self.view('about');
}

// function view_components(){
// 	var self = this;
// 	self.view('vuecomponents');
// }
