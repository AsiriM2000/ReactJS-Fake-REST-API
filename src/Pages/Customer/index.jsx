import { Component,Fragment } from 'react';
import Grid from '@mui/material/Grid';
import ButtonCommon from "../../Component/Common/Button";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Typography } from '@mui/material';
import SnackBarCommon from '../../Component/Common/SnackBar';
import PostService from "../../Service";
import BasicPostTable from "../../Component/Common/DataTable";

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userId: '',
                id: '',
                title: '',
                body: ''
            },
            data: [],
            loaded: false,
            
            alert: false,
            message: '',
            severity: ''
        }

    }
    async componentDidMount(){
            let res = await PostService.fetchPosts();
            if (res.status === 200) {
                this.setState({
                    loaded: true,
                    data: res.data
                })
                console.log("res: " + JSON.stringify(res.data))
    
            } else {
                console.log("fetching error: " + res)
            }
        
    }

    handleSubmit = async() => {
        let formData = this.state.formData
        let response = await PostService.createPost(formData);
        if (response.status === 201) {
            this.setState({
                alert: true,
                message: 'Post created succesfully!',
                severity: 'success'
            })
        } else {
            this.setState({
                alert: true,
                message: 'Post created Unsuccesfully!',
                severity: 'error'
            })
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Typography variant="h4">
                    Customer Manage
                </Typography>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container spacing={0.5}>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                            <Typography variant="body2">User Id</Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeHolder="User Id"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userId}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userId = e.target.value
                                    this.setState({formData})
                                }}
                                style={{ width: '100%' }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <Typography variant="body2">Id</Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeHolder="Id"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                validators={['required']}
                                value={this.state.formData.id}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.id = e.target.value
                                    this.setState({formData})
                                }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                            <Typography variant="body2">Title</Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeHolder="Title"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.title}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.title = e.target.value
                                    this.setState({formData})
                                }}
                                style={{ width: '100%' }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <Typography variant="body2">Body</Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeHolder="Body"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.body}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.body = e.target.value
                                    this.setState({formData})
                                }}
                                style={{ width: '100%' }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12} style={{ display: 'flex' }} justifyContent="flex-end" >
                            <ButtonCommon 
                                variant="contained" 
                                label="save" 
                                type="submit" 
                                onClick={()=>{
                                    this.handleSubmit()
                                }}
                            />
                        </Grid>
                    </Grid>
                </ValidatorForm>

                {this.state.loaded &&
                    <Grid container spacing={0.5} style={{ height: 400, width: '100%', marginTop: '50px' }}>
                        <BasicPostTable data={this.state.data} />
                    </Grid>
                }

                <SnackBarCommon
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ open: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </Fragment>

        )
    }
}

export default Customer;