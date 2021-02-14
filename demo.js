const toggleSwitch = document.querySelector('input[type=checkbox]');

if (localStorage.getItem('darkModeEnabled')) {
	document.body.className = 'dark';
	toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('click', function(e) {
	// this is the same as const checked = toggleSwitch.checked;
	// the brackets surrounding 'checked' replaces (.)
	const { checked } = toggleSwitch;
	if (checked) {
		localStorage.setItem('darkModeEnabled', true);
	} else {
		localStorage.removeItem('darkModeEnabled');
	}
	// if(?) the toggle switched is checked, make it dark
	// if its not(:), then do nothing('')
	document.body.className = toggleSwitch.checked ? 'dark' : '';
});
