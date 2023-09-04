import { World } from "@rbxts/matter";
import { Workspace } from "@rbxts/services";
import { Character, Points } from "shared/components/components";

function moveNPC(world: World) {
	for (const [id, model, points] of world.query(Character, Points)) {
		const character = model.Model.Clone();
		const humanoid = character.FindFirstChildOfClass("Humanoid");
		character.Parent = Workspace;
		let positions = points.Points;

		character.PivotTo(positions[0].CFrame);

		task.spawn(() => {
			world.despawn(id);

			for (let i = 1; i < positions.size(); i++) {
				const position = positions[i].Position;
				humanoid?.MoveTo(position);
				humanoid?.MoveToFinished.Wait();
			}

			character.Destroy();
		});
	}
}

export = moveNPC;
