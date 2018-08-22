// Here we test components in components_library/panes

import React from "react";
import renderer from 'react-test-renderer';

import AlignedGridPane from "../../../components_library/panes/AlignedGridPane";
import BodyPane from "../../../components_library/panes/BodyPane";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase/ButtonBase";
import BottomGridPane from "../../../components_library/panes/BottomGridPane";
import FrontGridPane from "../../../components_library/panes/FrontGridPane";
import HomeButtonPane from "../../../components_library/panes/HomeButtonPane";
import InnerGridPane from "../../../components_library/panes/InnerGridPane";
import SeparatorPane from "../../../components_library/panes/SeparatorPane";

describe('Testing AlignedGridPane', function() {

    const aligned_grid_pane_to_be_tested = ( <AlignedGridPane /> );

    it('AlignedGridPane renders correctly', () => {

        const tree = renderer
            .create(aligned_grid_pane_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});

describe('Testing BodyPane', function() {

    const body_pane_to_be_tested = ( <BodyPane /> );

    it('BodyPane renders correctly', () => {

        const tree = renderer
            .create(body_pane_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});

describe('Testing BottomGridPane', function() {

    const bottom_grid_pane_to_be_tested = ( <BottomGridPane
        leftComponent={ (

            <React.Fragment>

                <Typography variant="title" >

                    Emanuele Santanché

                </Typography>

                <Typography variant="subheading" >

                    Paris, France and, remotely, worldwide

                </Typography>

            </React.Fragment>

        ) }
        rightComponent={ (

            <ButtonBase href="/article/58/privacy-policy">
                <Typography variant="title" >

                    Privacy policy

                </Typography>
            </ButtonBase>

        ) }
    /> );

    it('BottomGridPane renders correctly', () => {

        const tree = renderer
            .create(bottom_grid_pane_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});


describe('Testing FrontGridPane', function() {

    const front_grid_pane_to_be_tested = ( <FrontGridPane /> );

    it('FrontGridPane renders correctly', () => {

        const tree = renderer
            .create(front_grid_pane_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});


describe('Testing HomeButtonPane', function() {

    const home_button_pane_to_be_tested = ( <HomeButtonPane /> );

    it('HomeButtonPane renders correctly', () => {

        const tree = renderer
            .create(home_button_pane_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});


describe('Testing InnerGridPane', function() {

    const inner_grid_pane_to_be_tested = ( <InnerGridPane key={1}

                                                          leftComponent={ (

                                                              <div>left component</div>

                                                          ) }

                                                          rightComponent={ (

                                                              <div>right component</div>

                                                          ) } /> );

    it('InnerGridPane renders correctly', () => {

        const tree = renderer
            .create(inner_grid_pane_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});


describe('Testing SeparatorPane', function() {

    const separator_pane_to_be_tested = ( <SeparatorPane /> );

    it('SeparatorPane renders correctly', () => {

        const tree = renderer
            .create(separator_pane_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});