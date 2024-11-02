const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { title, content, authorId } = req.body;
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        authorId,
      },
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
  }
};

// Get all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: { author: true, categories: true },
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
};

// Get a post by ID
exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id, 10) },
      include: { author: true, categories: true },
    });
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching post' });
  }
};

// Update a post by ID
exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, published } = req.body;
    const updatedPost = await prisma.post.update({
      where: { id: parseInt(id, 10) },
      data: { title, content, published },
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Error updating post' });
  }
};

// Delete a post by ID
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.post.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting post' });
  }
};
