import { fromEvent, merge } from 'rxjs';
import { sample, mapTo } from 'rxjs/operators';
import { pick } from 'lodash';
import * as p5 from 'p5';

const mouse$ = merge(
	fromEvent(document, 'mousedown').pipe(mapTo(false)), //
	fromEvent(document, 'mousemove').pipe(mapTo(true))
);

const mouseDrop$ = mouse$.pipe<boolean>(sample(fromEvent(document, 'mouseup')));

document.addEventListener('DOMContentLoaded', () => {
	mouseDrop$.subscribe((drop) => {
		console.log('mousedrop', drop);
	});
});
