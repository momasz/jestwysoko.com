import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import intersectionObserver from 'intersection-observer';

const noop = () => {};

Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });

configure({ adapter: new Adapter() });
