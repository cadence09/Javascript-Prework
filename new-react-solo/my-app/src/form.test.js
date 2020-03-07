import Form from './components/form';

describe('<Form/> rendering', () => {
    it('should render one <div>', () => {
        let form = shallow(<Form />);
        expect(form.children('h1')).toHaveLength(1);
    });
});