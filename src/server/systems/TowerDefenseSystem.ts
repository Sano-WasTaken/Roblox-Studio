import { World } from "@rbxts/matter";
import { Workspace } from "@rbxts/services";
import { Character, Points } from "shared/components/components";

function moveNPC(world: World) {
	for (const [id, model, points] of world.query(Character, Points)) {
		const character = model.Model.Clone();
		const humanoid = character.FindFirstChildOfClass("Humanoid");
		character.Parent = Workspace;
		const positions = points.Points;

		character.PivotTo(positions[0].CFrame);

		task.spawn(() => {
			world.despawn(id);

			positions.forEach((position) => {
				humanoid?.MoveTo(position.Position);
				while (!humanoid?.MoveToFinished.Wait()) {
					// humanoid?.MoveToFinished.Wait() returns false until point is reached
					humanoid?.MoveTo(position.Position);
				}
			});

			character.Destroy();
		});
	}
}

export = moveNPC;
