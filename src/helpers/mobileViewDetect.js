import { is_mobile_view } from '../stores/main';

let mobileView = false;
let break_point;

export const detectMobileView = (w, breakPoint) => {
	if (w <= breakPoint) {
		mobileView = true;
	} else {
		mobileView = false;
	}

	break_point = breakPoint;

	const mediaListener = window.matchMedia('(max-width: ' + breakPoint + 'px)');
	mediaListener.addListener(switchView);

	return mobileView;
};

const switchView = (e) => {
	if (window.innerWidth <= break_point) {
		mobileView = true;
	} else {
		mobileView = false;
	}
	is_mobile_view.set(mobileView);
};
