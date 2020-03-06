import Form from './components/form';

describe('<Form/> rendering', () => {
    it('should render one <div>', () => {
        let wrapper = shallow(<Form />);
        expect(wrapper.children('form')).toHaveLength(3);
    });
});