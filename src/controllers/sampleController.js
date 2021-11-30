import service from "../services/samplesService.js";

const controller = () => {
    console.log('I am a controller and I will call a service in a sec!')

    service();
}

export default controller;