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