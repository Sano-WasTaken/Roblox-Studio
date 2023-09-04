interface ReplicatedStorage extends Instance {
	TS: Folder & {
		module: ModuleScript;
		components: Folder & {
			components: ModuleScript;
		};
		network: ModuleScript;
	};
	Assets: Folder & {
		Mobs: Folder & {
			Rig: Model & {
				LeftLowerArm: MeshPart & {
					LeftLowerArm: WrapTarget;
					OriginalSize: Vector3Value;
					LeftElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftElbow: Motor6D;
					LeftWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				LeftFoot: MeshPart & {
					LeftFoot: WrapTarget;
					LeftAnkle: Motor6D;
					OriginalSize: Vector3Value;
					LeftAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftFootAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				RightHand: MeshPart & {
					RightGripAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightWrist: Motor6D;
					OriginalSize: Vector3Value;
					RightHand: WrapTarget;
				};
				HumanoidRootPart: Part & {
					RootRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					RootAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				RightLowerLeg: MeshPart & {
					RightAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightKnee: Motor6D;
					RightKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightLowerLeg: WrapTarget;
					OriginalSize: Vector3Value;
				};
				LeftUpperLeg: MeshPart & {
					LeftHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftHip: Motor6D;
					OriginalSize: Vector3Value;
					LeftUpperLeg: WrapTarget;
					LeftKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				LeftLowerLeg: MeshPart & {
					LeftKnee: Motor6D;
					OriginalSize: Vector3Value;
					LeftKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftLowerLeg: WrapTarget;
				};
				LowerTorso: MeshPart & {
					WaistCenterAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					Root: Motor6D;
					OriginalSize: Vector3Value;
					RootRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LowerTorso: WrapTarget;
					WaistRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					WaistBackAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					WaistFrontAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				Head: MeshPart & {
					HatAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					Head: WrapTarget;
					FaceFrontAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					face: Decal;
					HairAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					NeckRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					Neck: Motor6D;
					FaceCenterAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				UpperTorso: MeshPart & {
					LeftShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					BodyBackAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					NeckRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					UpperTorso: WrapTarget;
					OriginalSize: Vector3Value;
					Waist: Motor6D;
					RightCollarAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					BodyFrontAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					WaistRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftCollarAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					NeckAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				["Body Colors"]: BodyColors;
				LeftUpperArm: MeshPart & {
					LeftUpperArm: WrapTarget;
					LeftShoulder: Motor6D;
					LeftShoulderAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					LeftShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				RightLowerArm: MeshPart & {
					RightLowerArm: WrapTarget;
					OriginalSize: Vector3Value;
					RightElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightElbow: Motor6D;
				};
				LeftHand: MeshPart & {
					LeftHand: WrapTarget;
					LeftWrist: Motor6D;
					LeftGripAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					LeftWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				Animate: LocalScript & {
					point: StringValue & {
						PointAnim: Animation;
					};
					climb: StringValue & {
						ClimbAnim: Animation;
					};
					cheer: StringValue & {
						CheerAnim: Animation;
					};
					dance3: StringValue & {
						Animation2: Animation & {
							Weight: NumberValue;
						};
						Animation3: Animation & {
							Weight: NumberValue;
						};
						Animation1: Animation & {
							Weight: NumberValue;
						};
					};
					toolnone: StringValue & {
						ToolNoneAnim: Animation;
					};
					dance: StringValue & {
						Animation2: Animation & {
							Weight: NumberValue;
						};
						Animation3: Animation & {
							Weight: NumberValue;
						};
						Animation1: Animation & {
							Weight: NumberValue;
						};
					};
					ScaleDampeningPercent: NumberValue;
					fall: StringValue & {
						FallAnim: Animation;
					};
					laugh: StringValue & {
						LaughAnim: Animation;
					};
					idle: StringValue & {
						Animation2: Animation & {
							Weight: NumberValue;
						};
						Animation1: Animation & {
							Weight: NumberValue;
						};
					};
					jump: StringValue & {
						JumpAnim: Animation;
					};
					sit: StringValue & {
						SitAnim: Animation;
					};
					run: StringValue & {
						RunAnim: Animation;
					};
					swim: StringValue & {
						Swim: Animation;
					};
					mood: StringValue & {
						Animation1: Animation;
					};
					wave: StringValue & {
						WaveAnim: Animation;
					};
					PlayEmote: BindableFunction;
					toollunge: StringValue & {
						ToolLungeAnim: Animation;
					};
					toolslash: StringValue & {
						ToolSlashAnim: Animation;
					};
					swimidle: StringValue & {
						SwimIdle: Animation;
					};
					dance2: StringValue & {
						Animation2: Animation & {
							Weight: NumberValue;
						};
						Animation3: Animation & {
							Weight: NumberValue;
						};
						Animation1: Animation & {
							Weight: NumberValue;
						};
					};
					walk: StringValue & {
						WalkAnim: Animation;
					};
				};
				Humanoid: Humanoid & {
					BodyDepthScale: NumberValue;
					BodyHeightScale: NumberValue;
					BodyTypeScale: NumberValue;
					HumanoidDescription: HumanoidDescription;
					BodyProportionScale: NumberValue;
					Animator: Animator;
					BodyWidthScale: NumberValue;
					HeadScale: NumberValue;
				};
				RightUpperArm: MeshPart & {
					RightUpperArm: WrapTarget;
					RightElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					RightShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightShoulderAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightShoulder: Motor6D;
				};
				RightUpperLeg: MeshPart & {
					RightHip: Motor6D;
					RightHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightUpperLeg: WrapTarget;
					OriginalSize: Vector3Value;
				};
				RightFoot: MeshPart & {
					RightFootAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightAnkle: Motor6D;
					OriginalSize: Vector3Value;
					RightFoot: WrapTarget;
					RightAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
			};
		};
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			["@flamework"]: Folder & {
				core: Folder & {
					out: ModuleScript & {
						reflect: ModuleScript;
						metadata: ModuleScript;
						modding: ModuleScript;
						flamework: ModuleScript;
					};
				};
				components: Folder & {
					out: ModuleScript & {
						componentTracker: ModuleScript;
					};
				};
				networking: Folder & {
					out: ModuleScript & {
						events: Folder & {
							createClientHandler: ModuleScript;
							createServerHandler: ModuleScript;
							createNetworkingEvent: ModuleScript;
						};
						functions: Folder & {
							createClientHandler: ModuleScript;
							createNetworkingFunction: ModuleScript;
							createServerHandler: ModuleScript;
							errors: ModuleScript;
						};
						handlers: ModuleScript;
						middleware: Folder & {
							createMiddlewareProcessor: ModuleScript;
							skip: ModuleScript;
						};
						util: Folder & {
							populateInstanceMap: ModuleScript;
						};
					};
				};
			};
			["@rbxts"]: Folder & {
				roact: Folder & {
					src: ModuleScript & {
						createSpy: ModuleScript;
						createSignal: ModuleScript;
						oneChild: ModuleScript;
						Component: ModuleScript;
						createElement: ModuleScript;
						createReconciler: ModuleScript;
						GlobalConfig: ModuleScript;
						strict: ModuleScript;
						createRef: ModuleScript;
						Type: ModuleScript;
						Portal: ModuleScript;
						Symbol: ModuleScript;
						PropMarkers: Folder & {
							Ref: ModuleScript;
							Change: ModuleScript;
							Children: ModuleScript;
							Event: ModuleScript;
						};
						ComponentLifecyclePhase: ModuleScript;
						Config: ModuleScript;
						assign: ModuleScript;
						assertDeepEqual: ModuleScript;
						getDefaultInstanceProperty: ModuleScript;
						Binding: ModuleScript;
						NoopRenderer: ModuleScript;
						forwardRef: ModuleScript;
						internalAssert: ModuleScript;
						createReconcilerCompat: ModuleScript;
						createFragment: ModuleScript;
						RobloxRenderer: ModuleScript;
						PureComponent: ModuleScript;
						invalidSetStateMessages: ModuleScript;
						ElementKind: ModuleScript;
						createContext: ModuleScript;
						Logging: ModuleScript;
						ElementUtils: ModuleScript;
						SingleEventManager: ModuleScript;
						None: ModuleScript;
					};
				};
				matter: Folder & {
					lib: ModuleScript & {
						topoRuntime: ModuleScript;
						["debugger"]: Folder & {
							hookWidgets: ModuleScript;
							["debugger"]: ModuleScript;
							ui: ModuleScript;
							clientBindings: ModuleScript;
							hookWorld: ModuleScript;
							mouseHighlight: ModuleScript;
							EventBridge: ModuleScript;
							formatTable: ModuleScript;
							widgets: Folder & {
								panel: ModuleScript;
								queryInspect: ModuleScript;
								link: ModuleScript;
								entityInspect: ModuleScript;
								errorInspect: ModuleScript;
								worldInspect: ModuleScript;
								realmSwitch: ModuleScript;
								valueInspect: ModuleScript;
								tooltip: ModuleScript;
								hoverInspect: ModuleScript;
								selectionList: ModuleScript;
								codeText: ModuleScript;
								frame: ModuleScript;
								container: ModuleScript;
							};
						};
						["archetype.spec"]: ModuleScript;
						archetype: ModuleScript;
						rollingAverage: ModuleScript;
						hooks: Folder & {
							useThrottle: ModuleScript;
							log: ModuleScript;
							useDeltaTime: ModuleScript;
							useEvent: ModuleScript;
							["useEvent.spec"]: ModuleScript;
						};
						immutable: ModuleScript;
						Queue: ModuleScript;
						component: ModuleScript;
						Loop: ModuleScript;
						mock: Folder & {
							BindableEvent: ModuleScript;
						};
						["topoRuntime.spec"]: ModuleScript;
						["Loop.spec"]: ModuleScript;
						["component.spec"]: ModuleScript;
						["World.spec"]: ModuleScript;
						World: ModuleScript;
					};
				};
				services: ModuleScript;
				t: Folder & {
					lib: Folder & {
						ts: ModuleScript;
					};
				};
				maid: Folder & {
					Maid: ModuleScript;
				};
				["object-utils"]: ModuleScript;
				["compiler-types"]: Folder & {
					types: Folder;
				};
				types: Folder & {
					include: Folder & {
						generated: Folder;
					};
				};
				["matter-hooks"]: Folder & {
					out: ModuleScript & {
						["package"]: Folder & {
							Matter: ModuleScript;
							["matter-hooks"]: ModuleScript & {
								useMap: ModuleScript;
								useContextAction: ModuleScript;
								useStream: ModuleScript;
								Queue: ModuleScript;
								useAsync: ModuleScript;
								useMemo: ModuleScript;
								diffTables: ModuleScript;
								useReducer: ModuleScript;
								useChange: ModuleScript;
							};
						};
					};
				};
				signal: ModuleScript;
			};
		};
	};
}
