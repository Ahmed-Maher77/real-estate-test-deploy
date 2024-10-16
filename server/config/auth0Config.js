import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://real-estate-test-deploy.vercel.app",
    issuerBaseURL: "https://dev-u4n3gigndbkmwq7h.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck
