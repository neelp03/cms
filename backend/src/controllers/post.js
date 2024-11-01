const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createPost = async (req, res) => {
  try {
    const { title, content, authorId } = req.body;
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        authorId,
        published: false,
      },
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
  }
};
