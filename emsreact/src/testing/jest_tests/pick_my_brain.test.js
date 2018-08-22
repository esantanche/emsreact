// Here we test components in the folder pick_my_brain

import React from "react";
import ReactDOM from "react-dom";

// To provide this component with the application context
// See AppContext.js
import AppContext from "../../AppContext";

import PickMyBrainScreen from "../../pick_my_brain/PickMyBrainScreen";
import PickMyBrainMessageService from "../../services/pick_my_brain_message/PickMyBrainMessageService";

import { mount } from "enzyme/build/index";

describe('Testing PickMyBrainScreen', function() {

    const mockCallBack = jest.fn();

    const AppPickMyBrainMessageService = new PickMyBrainMessageService();

    const Services = { TopicService: null,
                       ArticleService: null,
                       PickMyBrainMessageService: AppPickMyBrainMessageService };

    const pick_my_brain_screen_to_be_tested = ( <AppContext.Provider value={Services}>
                                                    <PickMyBrainScreen onclick={mockCallBack}/>
                                                </AppContext.Provider> );

    it('PickMyBrainScreen renders without crashing', () => {

        const div = document.createElement('div');
        ReactDOM.render(pick_my_brain_screen_to_be_tested , div);
        ReactDOM.unmountComponentAtNode(div);

    });

    it('PickMyBrainScreen, should find the submit button', () => {

        const dialog = mount(pick_my_brain_screen_to_be_tested);

        const submit_button = dialog.findWhere(node => node.is('button'));

        expect(submit_button).toHaveLength(1);

    });

    it('PickMyBrainScreen, should find the fields', () => {

        const dialog = mount(pick_my_brain_screen_to_be_tested);

        // See http://airbnb.io/enzyme/docs/api/selector.html
        // for selector syntax
        const email_field = dialog.findWhere(node => node.is('input#email'));
        const name_field = dialog.findWhere(node => node.is('input#name'));
        const message_field = dialog.findWhere(node => node.is('textarea#message'));

        expect(email_field).toHaveLength(1);
        expect(name_field).toHaveLength(1);
        expect(message_field).toHaveLength(1);

    });

    it('PickMyBrainScreen, verify that the submit button gets enabled when all fields are valid', () => {

        const dialog = mount(pick_my_brain_screen_to_be_tested);

        // See http://airbnb.io/enzyme/docs/api/selector.html
        // for selector syntax
        const email_field = dialog.findWhere(node => node.is('input#email'));
        const name_field = dialog.findWhere(node => node.is('input#name'));
        const message_field = dialog.findWhere(node => node.is('textarea#message'));

        email_field.simulate('change', { target: { value: 'esantanche@gmail.com' }});
        name_field.simulate('change', { target: { value: 'Emanuele Santanche' }});
        message_field.simulate('change', { target: { value: 'Test message' }});

        const pick_my_brain_screen_component = dialog.findWhere(node => node.is('PickMyBrainScreen'));

        // Are we able to find the component PickMyBrainScreen?
        expect(pick_my_brain_screen_component).toHaveLength(1);

        const submit_button = dialog.findWhere(node => node.is('button'));

        // Could we find the button?
        expect(submit_button).toHaveLength(1);

        // Expect the button to be now enabled because
        // the fields are valid
        expect(submit_button.prop('disabled')).toBeFalsy();

    });

});
