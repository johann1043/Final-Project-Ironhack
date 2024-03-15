IRONHACK, BERLIN
DATA ANALYTICS BOOTCAMP
FINAL PROJECT
Team: Ana Melissa Valladares and Johannes Kessel

Business Idea
1. Convolutional Neural Network (CNN) for Multivariate Classification
This repository contains code for implementing a Convolutional Neural Network (CNN) model for multivariate classification using Keras and TensorFlow. The model is designed to work with multivariate datasets, where each instance has multiple features.

OVERVIEW Retrieved from: https://stanford.edu/~shervine/teaching/cs-230/cheatsheet-convolutional-neural-networks

2. Dataset
3. Workflow
A CNN machine learning model for image classification typically follows a workflow involving several key steps. Firstly, the dataset containing labeled images is preprocessed, which may include tasks such as resizing images, normalizing pixel values, and splitting the data into training and validation sets. Next, the CNN model architecture is designed, comprising convolutional layers for feature extraction, pooling layers for dimensionality reduction, and fully connected layers for classification. The model is then trained on the training dataset using an optimization algorithm to minimize a loss function, with performance evaluated on the validation set. After training, the model is tested on unseen data to assess its generalization ability. Fine-tuning and hyperparameter tuning may be performed iteratively to optimize model performance.

We can resume the process in the following steps:

3.1 Data Preprocessing
The dataset preprocessing for a CNN machine learning model with Keras involves using the image_dataset_from_directory function to load image data from a directory. This function automatically generates labels for the images based on subdirectory names, and supports various options such as specifying label mode, image size, batch size, and color mode. Additionally, it allows for shuffling the data, splitting it into training and test sets, and specifying interpolation methods for resizing images. Overall, this function simplifies the process of loading and preprocessing image data for training CNN models in Keras.

3.2 Building the model
We must start by defining the input shape of the images, typically in the form of height, width, and number of color channels. Then, creating a series of layers, starting with convolutional layers responsible for extracting features from the input images using small square filters known as kernels. These feature maps are then passed through activation functions to introduce non-linearity. Pooling layers follow to downsample the feature maps, reducing computational complexity. After multiple iterations of convolutional and pooling layers, the final output is flattened and fed into one or more fully connected layers for classification. The number of neurons in the output layer matches the number of classes in the dataset, with activation functions such as softmax used to output probabilities for each class.

3.3 Compiling the model
Compiling a sequential model involves configuring it for training with key components like the Adam optimizer, categorical cross-entropy loss function, and accuracy metric. These choices optimize the model's weights during training, measure the difference between predicted and actual labels, and monitor performance, respectively. Once compiled, the model is ready for training and evaluation on a dataset, guiding it towards better performance in classification tasks.

3.4 Model training
During model training, the sequential model undergoes an iterative process aimed at minimizing the training loss while simultaneously preventing overfitting. To achieve this, a small learning rate is often employed, ensuring gradual adjustments to the model's weights. Additionally, the dropout layer is strategically inserted to randomly deactivate neurons during training, effectively reducing the risk of overfitting by promoting model generalization. Throughout the training process, the validation loss (val-loss) serves as a crucial metric to evaluate the model's performance on unseen data, guiding adjustments and enhancements to achieve optimal classification results.

3.5 Model evaluation
After training, the model's performance is evaluated on both the training and test sets using accuracy as a metric. This assessment measures the proportion of correctly classified instances, providing insights into the model's ability to generalize to new data.
