import React, { useReducer } from 'react';
import Reducer, { inittialState } from './reducer/index';
import { Container, Grid, Responsive, Segment } from 'semantic-ui-react';
import Title from './components/header/header';
import Search from './components/controls/search';
import Add from './components/controls/add';
import Form from './components/form/form';
import Table from './components/table/list';
// import TableMobile from './components/table/TableMobile/list';
import { dispatchContext, stateContext } from './contexts/index';

function App() {
    const [state, dispatch] = useReducer(Reducer, inittialState);
    return (
        <dispatchContext.Provider value={dispatch}>
            <stateContext.Provider value={state}>
                <React.Fragment>
                    <Container>
                        <Title />
                        <Grid>
                            <Grid.Row>
                                {/* Search */}
                                <Grid.Column width={6}>
                                    <Search />
                                </Grid.Column>
                                {/* End Search */}
                                <Grid.Column width={10}>
                                    <Grid.Row columns={1}>
                                        <Grid.Column>
                                            {/* Add Task */}
                                            <Add />
                                            {/* End Add Task */}
                                        </Grid.Column>
                                        <Grid.Column>
                                            {/* Form */}
                                            {state.toogleForm ? <Form /> : ''}
                                            {/* End Form */}
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid.Column>
                            </Grid.Row>
                            {/* Table */}

                            {/* <Grid.Row as={Segment.Group}>
                                <Responsive as={Segment} {...Responsive.onlyComputer}>
                                    <Table />
                                </Responsive>
                                <Responsive as={Segment} {...Responsive.onlyMobile}>
                                    <TableMobile />
                                </Responsive>
                            </Grid.Row> */}
                            
                            <Grid.Row>
                                <Table />
                            </Grid.Row>

                            {/* End Table */}
                        </Grid>
                    </Container>
                </React.Fragment>
            </stateContext.Provider>
        </dispatchContext.Provider>
    );
}
export default App;
