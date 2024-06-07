<!--
 * @Author: Hong.Zhang
 * @Date: 2024-06-07 14:22:27
 * @Description: 
-->
## Neural Networks

1. Feedforward Neural Network (FNN): This is the most basic neural network model, consisting of input layer, hidden layers, and output layer. Each node is connected to every node in the next layer.
2. Convolutional Neural Network (CNN): Primarily used for image processing and computer vision tasks, extracting image features through convolutional and pooling layers.
3. Recurrent Neural Network (RNN): Suitable for processing sequential data such as time series, text, etc. It has memory capabilities, handling context-dependent information.
4. Long Short-Term Memory (LSTM): A special type of recurrent neural network that solves the long-term dependency problem of traditional RNNs, suitable for processing long sequence data.
5. Gated Recurrent Unit (GRU): Similar to LSTM but with a simplified structure and higher computational efficiency.
6. Generative Adversarial Network (GAN): Consists of a generator and a discriminator, where the generator aims to generate realistic data while the discriminator tries to differentiate between real and generated data.
7. Autoencoder: Used for data dimensionality reduction and feature extraction, compressing input data through an encoder and reconstructing it through a decoder.
8. Variational Autoencoder (VAE): A variant of autoencoder used for data generation, capable of learning the probability distribution of data.
9. Graph Neural Network (GNN): Used for processing graph-structured data like social networks, chemical molecules, etc.
10. Transformer: Mainly used for natural language processing tasks such as machine translation and text generation, known for its parallel processing ability and handling long-range dependencies.
11. Hierarchical Temporal Memory (HTM): Simulates the learning mechanism of the neocortex, primarily used for time series prediction and pattern recognition.
12. Capsule Network: Enhances CNN capabilities by providing richer and hierarchical representations of input features through "capsules," especially suitable for complex image recognition tasks.

## Convolutional Neural Network (CNN)

1. LeNet: An early convolutional neural network proposed by Yann LeCun and others, used for handwritten digit recognition (MNIST dataset). It has a simple structure with two convolutional layers and two fully connected layers.
2. AlexNet: Submitted by Alex Krizhevsky and team in 2012 for the ImageNet competition, a deep convolutional neural network introducing ReLU activation function and dropout regularization, consisting of five convolutional layers and three fully connected layers.
3. VGGNet: Proposed by Simonyan and Zisserman in 2014, using smaller convolutional kernels (3x3) but deepening the network (e.g., VGG-16 or VGG-19 with 16 layers and 19 layers). VGGNet has a deeper architecture, facilitating the extraction of higher-level features.
4. GoogLeNet (Inception v1): Introduced by Szegedy and team in 2014, incorporating Inception modules to process features in parallel using different convolutional kernel sizes and pooling operations, significantly boosting model efficiency and accuracy.
5. Inception v3: An improved version of the Inception series, further optimizing Inception modules with more complex convolutional and pooling operations.
6. ResNet (Residual Network): Proposed by He et al. in 2015, addressing the vanishing gradient problem in training deep networks by introducing residual connections. ResNet has various variants like ResNet-18, ResNet-34, ResNet-50, ResNet-101, etc.
7. DenseNet (Densely Connected Convolutional Networks): Introduced by Huang et al. in 2017, connecting each layer to all subsequent layers, effectively alleviating the vanishing gradient problem and enhancing feature reuse.
8. Xception (Extreme Inception): Proposed by Chollet as a drastic improvement on the Inception module, using depthwise separable convolutions to significantly reduce parameters and computations.
9. MobileNet: A lightweight CNN architecture designed for mobile and embedded devices, improving computational efficiency through depthwise separable convolutions. It has subsequent versions like MobileNetV2 and MobileNetV3.
10. EfficientNet: Proposed by Tan and Le, optimizing network depth, width, and resolution simultaneously through compound scaling, achieving excellent performance and efficiency.
11. ShuffleNet: A lightweight CNN architecture reducing computations significantly through group convolutions and channel shuffling, suitable for mobile devices.
12. NASNet: Introduced by Google, utilizes Neural Architecture Search to automatically design convolutional neural networks, achieving high efficiency and accuracy.

## Use Cases

1. Image Classification:
   - ResNet: Opt for ResNet series (e.g., ResNet-50 or ResNet-101) for powerful performance in various image classification tasks.
   - EfficientNet: Balancing performance and computational resources, EfficientNet offers an efficient choice through compound scaling for depth, width, and resolution optimization.
2. Embedded and Mobile Applications:
   - MobileNet: Specifically designed for mobile and embedded devices, choose MobileNetV2 or MobileNetV3 for scenarios with limited computing resources.
   - ShuffleNet: Also suitable for lightweight applications, significantly reducing computations through group convolutions and channel shuffling.
3. Object Detection:
   - YOLO (You Only Look Once): An efficient real-time object detection model, options include YOLOv3 or YOLOv4.
   - SSD (Single Shot MultiBox Detector): Ideal for real-time detection tasks, offering good speed and performance.
   - Faster R-CNN: Choose for high accuracy requirements, although relatively slower compared to other options.
4. Medical Image Processing:
   - U-Net: Specifically designed for biomedical image segmentation tasks, widely utilized in various medical image analysis tasks.
5. Image Generation and Style Transfer:
   - VGGNet: Despite not being the latest architecture, VGGNet excels in feature extraction for tasks like image generation and style transfer; VGG-16 and VGG-19 are commonly used versions.
   - GANs (Generative Adversarial Networks): e.g., DCGAN, suitable for generation tasks and image enhancement.
6. Automated Design and Optimization:
   - NASNet: Consider using Neural Architecture Search (NAS) designed models like NASNet if advanced computing resources are available, discovering optimal network architectures through automatic searches.