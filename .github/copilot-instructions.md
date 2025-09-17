# Copilot Instructions for Agricultural Impact Simulation Backend

## Project Architecture
- **Backend:** Node.js + Express REST API
- **Database:** MongoDB (default, see `DB/DB.js`)
- **Models:** Located in `models/` (e.g., `farm.models.js`, `soil.models.js`, `climate.models.js`). Each model represents a core domain entity.
- **Controllers:** Located in `controllers/`, handle HTTP logic and validation.
- **DAO Layer:** Located in `dao/`, encapsulates DB operations for each entity. Use DAOs for all CRUD and integration logic.
- **Routes:** Defined in `routes/routes.js`, mapping endpoints to controllers.

## Data Flow & Integration
- **Entity Creation:** For complex entities (e.g., Farm), DAOs integrate multiple models. Example: `farm.dao.js` creates Farmer, Soil, Climate, and Farm, linking via IDs.
- **Referential Integrity:** Farms reference Farmer, Soil, and Climate by ObjectId. Always save related entities first, then link their IDs in the main entity.
- **Example Pattern:**
  - Save Farmer → Save Soil → Save Climate → Save Farm (with references)
  - See `insertData` in `farm.dao.js` for implementation.

## Developer Workflows
- **Start Server:** `node index.js` (or use Nodemon for auto-reload)
- **Database Config:** Edit `DB/DB.js` for connection details.
- **Testing:** (If present) Use Jest for unit/integration tests. No test folder detected; add tests in `__tests__/` or similar.
- **Debugging:** Use console logs in DAOs/controllers. For DB issues, check model definitions and connection in `DB/DB.js`.

## Conventions & Patterns
- **Async/Await:** All DB operations use async/await. Always handle errors with try/catch and pass to `next(err)`.
- **Response Format:** Standardized JSON: `{ success, data, message }`.
- **Modular Structure:** One file per entity per layer (model, controller, dao).
- **Parameter Passing:** All entity creation expects parameters in `req.body`.
- **Comments:** Use `// TODO` for incomplete features, especially integration logic.

## Integration Points
- **AI Engine:** Not present in backend codebase; likely external (Python). Integrate via REST API or microservice.
- **Frontend:** Not present; backend exposes REST endpoints for React frontend.
- **External Services:** None detected in backend codebase.

## Key Files & Directories
- `models/` – Mongoose schemas for all entities
- `dao/` – Data access logic, integration patterns
- `controllers/` – HTTP request handling
- `routes/routes.js` – API endpoint definitions
- `DB/DB.js` – Database connection
- `index.js` – App entry point

## Example: Farm Creation (Integration)
```js
// farm.dao.js
const newFarmer = new Farmer({...});
const farmerData = await newFarmer.save();
const newSoil = new Soil({...});
const soilData = await newSoil.save();
const newClimate = new Climate({...});
const climateData = await newClimate.save();
const newFarm = new Farm({
  farmer: farmerData._id,
  soil: soilData._id,
  climate: climateData._id,
  // ...other fields
});
const farmData = await newFarm.save();
```

## Tips for AI Agents
- Always check for required fields in `req.body` before creating entities.
- Maintain referential integrity by saving related entities first and linking by ID.
- Use standardized response format for all endpoints.
- Follow modular structure for new features: add model, dao, controller, and route.

---

_If any section is unclear or missing, please provide feedback for further refinement._
