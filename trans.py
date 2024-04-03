from flask import Flask, request, jsonify
import whisper

app = Flask(__name__)
model = whisper.load_model("base")

@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    audio_data = file.read()

    # Assuming the audio file is in a compatible format
    result = model.transcribe(audio_data)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
