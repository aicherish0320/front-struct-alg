const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: [
            {
              val: 'f',
              children: []
            }
          ]
        }
      ]
    },
    {
      val: 'c',
      children: [
        {
          val: 'e',
          children: []
        }
      ]
    }
  ]
}

const binaryTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 5,
    left: {
      val: 6
    },
    right: {
      val: 7
    }
  }
}

const binaryTree2 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3
    },
    right: null
  }
}

module.exports = { tree, binaryTree, binaryTree2 }
