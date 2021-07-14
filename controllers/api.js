import Clarifai from 'clarifai';

const app = new Clarifai.App({
    apiKey: '9b734cf17c51440898f602a0a1c562c0'
});

const handleApiCall = (req, res) => {
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
      .then(data => {
        res.json(data);
      })
      .catch(err => res.status(400).json('unable to work with API'))
  }

  export default handleApiCall;