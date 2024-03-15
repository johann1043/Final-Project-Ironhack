
from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        # Load the model
        cnn = tf.keras.models.load_model('./my_final_model.h5')

        # Process the uploaded file
        img = tf.io.decode_image(file.read(), channels=3)  # Decode the image to a tensor
        img = tf.image.resize(img, [128, 128])  # Resize the image
        img = img / 255.0  # Normalize pixel values if your model expects pixel values in [0,1]
        img = tf.expand_dims(img, 0)  # Convert image to a batch of size 1

        # Predict
        predictions = cnn.predict(img)
        result_index = np.argmax(predictions)  # Return index of max element

        # Assuming class names are from 1 to 102
        class_name = [
            'alpine_sea_holly', 'anthurium', 'artichoke', 'azalea', 'ball_moss', 'balloon_flower',
            'barbeton_daisy', 'bearded_iris', 'bee_balm', 'bird_of_paradise', 'bishop_of_llandaff',
            'black-eyed_susan', 'blackberry_lily', 'blanket_flower', 'bolero_deep_blue', 'bougainvillea',
            'bromelia', 'buttercup', 'californian_poppy', 'camellia', 'canna_lily', 'canterbury_bells',
            'cape_flower', 'carnation', 'cautleya_spicata', 'clematis', "colt's_foot", 'columbine',
            'common_dandelion', 'corn_poppy', 'cyclamen', 'daffodil', 'desert-rose', 'english_marigold',
            'fire_lily', 'foxglove', 'frangipani', 'fritillary', 'garden_phlox', 'gaura', 'gazania',
            'geranium', 'giant_white_arum_lily', 'globe-flower', 'globe_thistle', 'grape_hyacinth',
            'great_masterwort', 'hard-leaved_pocket_orchid', 'hibiscus', 'hippeastrum', 'japanese_anemone',
            'king_protea', 'lenten_rose', 'lotus_lotus', 'love_in_the_mist', 'magnolia', 'mallow',
            'marigold', 'mexican_aster', 'mexican_petunia', 'monkshood', 'moon_orchid', 'morning_glory',
            'orange_dahlia', 'osteospermum', 'oxeye_daisy', 'passion_flower', 'pelargonium', 'peruvian_lily',
            'petunia', 'pincushion_flower', 'pink-yellow_dahlia', 'pink_primrose', 'poinsettia', 'primula',
            'prince_of_wales_feathers', 'purple_coneflower', 'red_ginger', 'rose', 'ruby-lipped_cattleya',
            'siam_tulip', 'silverbush', 'snapdragon', 'spear_thistle', 'spring_crocus', 'stemless_gentian',
            'sunflower', 'sweet_pea', 'sweet_william', 'sword_lily', 'thorn_apple', 'tiger_lily', 'toad_lily',
            'tree_mallow', 'tree_poppy', 'trumpet_creeper', 'wallflower', 'water_lily', 'watercress',
            'wild_pansy', 'windflower', 'yellow_iris'
        ]
        predicted_class = class_name[result_index]  # Map the index to the class name

        return jsonify({'prediction': predicted_class})

if __name__ == '__main__':
    app.run(debug=True)




