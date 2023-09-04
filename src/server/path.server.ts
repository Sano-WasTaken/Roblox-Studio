import { CollectionService, ReplicatedStorage, RunService, Workspace } from "@rbxts/services";
import { World, Loop } from "@rbxts/matter";
import { Character, Points } from "shared/components/components";
import moveNPC from "./systems/TowerDefenseSystem";

const world = new World();
const loop = new Loop(world, {});

CollectionService.GetTagged("Path").forEach((path) => {
	let points = new Array<Part>

	if (path.IsA("Model")) {
		path.FindFirstChild("Points")?.GetChildren().forEach((part) => {
			points[tonumber(part.Name) as number - 1] = part as Part
			print(points)
		})
		
	}

	task.spawn(() => {
		for (let i = 1; i < 50; i++) {
			const model = Character({ Model: ReplicatedStorage.Assets.Mobs.Rig });
			const ipoints = Points({ Points: points });

			world.spawn(model, ipoints);
			task.wait(1.5);
		}
	});
});

print("all is OK! 3");

loop.scheduleSystem(moveNPC);

loop.begin({
	default: RunService.Heartbeat,
});
