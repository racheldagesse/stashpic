/*global IE:true */
/*
-ms-reveal (IE 10)
added eye icon to end of field of type password
on click and hold show the current hidden value
Apply to !IE and IE 9

Changeing type is not allowed in IE 8

Requires: css .form-reveal

** refactor using ??  https://www.youtube.com/watch?v=_6ijcqI5fi8&list=PLP6DbQBkn9ymGQh2qpk9ImLHdSH5T7yw7
*/

angular.module('io.modernizr', [])
.directive('input', ['$compile', function($compile) {
	return {
		restrict: 'E',
		scope:true,
		link: function(scope, element, attrs, controller) {

			function showPassword(e) {
				//console.log('show');
				element[0].type = 'text';
			}

			function hidePassword(e) {
				//console.log('hide');
				if (!(element.val() === '' || element.val() === attrs.placeholder)) {
					element[0].type = 'password';
				}

			}

			// Check if password type
			if (attrs.type === 'password') {//} && (!IE || IE === 9) ) {
				try {
					element[0].type = 'password'; // try
					var button = $compile('<i class="forms-reveal icon-eye-open"></i>')(scope); // &nbsp;&nbsp;

					// show on click / mousedown / ontouch
					button.bind('mousedown', showPassword);
					//button.bind('mouseover', show);
	
					// hide on mouseout / mouseup / touchout / touchup
					button.bind('mouseout', hidePassword);
					button.bind('mouseup', hidePassword);
	
					//button.bind('keypress', toggleButton);
	
					element.after(button);
				} catch (e) {}
				

				/*function toggleButton(e) {
					console.log(element[0].nextSibling);
					element[0].nextSibling.styles.display = (element.val() === '' || element.val() === attrs.placeholder)
						? 'none'
						: 'block';
				}

				toggleButton();
				*/
			}

		}
	};
}]);
