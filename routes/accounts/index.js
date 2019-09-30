/**
 * @swagger
 * /registerUser:
 *   post:
 *     tags:
 *       - Accounts
 *     name: Register
 *     summary: Register a new user
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: version
 *         description: Application Version.
 *         in: header
 *         required: true
 *         type: string   
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             first_name:
 *               type: string
 *             last_name:
 *               type: string
 *             username:
 *               type: string
 *               required: true              
 *             email:
 *               type: string
 *               required: true
 *             password:
 *               type: string
 *               format: password
 *               required: true
 *     responses:
 *       '200':
 *         description: User created
 *       '403':
 *         description: Username or email already taken
 */
module.exports = (app) => {
    app.post('/registerUser', (req, res) => {
           res.send("Hello" + req.body);
    });
}

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Accounts
 *     name: Login
 *     summary: Login with valid cridential
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: version
 *         description: Application Version.
 *         in: header
 *         required: true
 *         type: string   
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:             
 *             email:
 *               type: string
 *               required: true
 *             password:
 *               type: string
 *               format: password
 *               required: true
 *     responses:
 *       '200':
 *         description: User created
 *       '403':
 *         description: Username or email already taken
 */
module.exports = (app) => {
    app.post('/login', (req, res) => {
           res.send("Hello");
    });
}


/**
 * @swagger
 * /accounts/{admin_id}:
 *   delete:
 *     tags:
 *       - Accounts
 *     name: Login
 *     summary: Delete user with Id
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: version
 *         description: Application Version.
 *         in: header
 *         required: true
 *         type: string 
 *       - name: admin_id
 *         description: admin_id
 *         in: path
 *         required: true
 *         type: string   
 *     responses:
 *       200:
 *         description: This contain to the success message
 *         schema:
 *           type: object
 *           properties:
 *            message:
 *              type: string
 *       426:
 *         description: "Indicate that version in header is not supported"
 *         schema:
 *           type: object
 *           properties:
 *            message:
 *              type: string
 *       400:
 *         description: "Indicate body parameters are not valid."
 *         schema:
 *           type: object
 *           properties:
 *            message:
 *              type: string
 *       401:
 *         description: "User don't have permissions to execute this API or token is not valid"
 *         schema:
 *           type: object
 *           properties:
 *            message:
 *              type: string
 *       498:
 *         description: "Indicate Auth token is invalid or Expired"
 *         schema:
 *           type: object
 *           properties:
 *            message:
 *              type: string
 */
module.exports = (app) => {
    app.delete('/:admin_id', (req, res) => {
           res.send("Hello"+ req.params.admin_id);
    });
}

