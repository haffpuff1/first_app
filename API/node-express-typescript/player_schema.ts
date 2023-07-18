import * as yup from "yup";  
export const create_new_player_schema = yup.object({
    body: yup.object({
        ID: yup.number().min(0).max(100).required(),
        FirstName: yup.string().min(1).max(25).required(),
        LastName: yup.string().min(1).max(25).required(),
        APT: yup.number().min(0).max(100).required(),
        SET: yup.number().min(0).max(100).required(),
        NationalAssociation: yup.string().oneOf(["England", "Northern Ireland", "Wales", "Scotland"]),
        average: yup.number().min(0).max(100).required(),
        position: yup.string().lowercase().oneOf(["attacker", "midfielder", "defender"]),
    }),
  });

export const create_new_team_schema = yup.object({
        body: yup.object({
            defender: yup.number().min(0).max(7).required(),
            midfielders: yup.number().min(0).max(7).required(), 
            attackers: yup.number().min(0).max(7).required(),
        }),
    });
    
export const random_team_schema = yup.object({
    body: yup.object({
        nb_required: yup.number().min(0).max(20).required()
    }),
});

